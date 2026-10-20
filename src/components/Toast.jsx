import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ message, type = 'info', onClose }) {
  if (!message) return null;

  return (
    <div className="toast-container" role="alert" aria-live="assertive">
      <div className={`toast ${type}`}>
        {type === 'success' ? (
          <CheckCircle2 size={20} style={{ color: '#10B981', flexShrink: 0 }} />
        ) : type === 'error' ? (
          <AlertCircle size={20} style={{ color: '#EF4444', flexShrink: 0 }} />
        ) : (
          <Info size={20} style={{ color: '#38D4D8', flexShrink: 0 }} />
        )}
        <span style={{ fontSize: '0.875rem', lineHeight: '1.4', flex: 1 }}>{message}</span>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#A3B9CC', cursor: 'pointer', padding: 0 }}
            aria-label="Dismiss Notification"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
