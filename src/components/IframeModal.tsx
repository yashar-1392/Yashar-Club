import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, Loader2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { useApp } from '@/context';

interface IframeModalProps {
  url: string;
  variant: 'claim' | 'support';
  onClose: () => void;
}

export function IframeModal({ url, variant, onClose }: IframeModalProps) {
  const { t } = useApp();
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';

    // If the iframe doesn't fire onload within 8 seconds, assume it's blocked
    timeoutRef.current = setTimeout(() => {
      if (loading) setFailed(true);
    }, 8000);

    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  const title = variant === 'claim' ? t.modal.claimTitle : t.modal.supportTitle;

  const handleIframeLoad = () => {
    // If we can't access the content (cross-origin), we still consider it loaded
    // but only if we haven't already marked it as failed
    setLoading(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // After a short delay, check if the iframe is actually showing content
  // by trying to access its contentWindow (will throw for cross-origin blocked frames)
  useEffect(() => {
    const checkTimer = setTimeout(() => {
      try {
        const iframe = iframeRef.current;
        if (!iframe || !iframe.contentWindow) {
          setFailed(true);
          setLoading(false);
          return;
        }
        // If we can access contentDocument and it's empty/blocked, mark as failed
        // Cross-origin will throw, which is fine (means it loaded)
      } catch {
        // Cross-origin access throws - this is normal, iframe may have loaded
      }
    }, 4000);

    return () => clearTimeout(checkTimer);
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full md:w-[90%] md:h-[88%] bg-white dark:bg-gray-900 rounded-none md:rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-brand-600 to-brand-500 text-white shrink-0 z-10">
          <h3 className="text-base font-bold flex items-center gap-2">
            {loading && <Loader2 size={18} className="animate-spin" />}
            {failed && <AlertCircle size={18} />}
            {!loading && !failed && <ExternalLink size={18} />}
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors"
            >
              <ExternalLink size={14} />
              <span className="hidden sm:inline">{t.modal.openInNewTab}</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors"
              aria-label={t.modal.close}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 relative bg-gray-100 dark:bg-gray-800 overflow-hidden">
          {/* Loading overlay */}
          {loading && !failed && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 z-10">
              <Loader2 size={40} className="text-brand-500 animate-spin mb-4" />
              <p className="text-sm text-gray-500 dark:text-gray-400">{t.modal.loading}</p>
            </div>
          )}

          {/* Fallback - when iframe is blocked by X-Frame-Options/CSP */}
          {failed && (
            <div className="absolute inset-0 flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-800">
              <div className="max-w-md text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-brand-500/10 flex items-center justify-center">
                  <AlertCircle size={32} className="text-brand-600 dark:text-brand-400" />
                </div>
                <p className="text-base font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  {variant === 'claim' ? t.modal.claimTitle : t.modal.supportTitle}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                  {t.modal.fallbackMessage}
                </p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-bold shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
                >
                  <ArrowUpRight size={20} />
                  {t.modal.openInNewTab}
                </a>
              </div>
            </div>
          )}

          {/* Iframe - always rendered but hidden when failed */}
          {!failed && (
            <iframe
              ref={iframeRef}
              src={url}
              className="absolute inset-0 w-full h-full border-0"
              title={title}
              onLoad={handleIframeLoad}
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
