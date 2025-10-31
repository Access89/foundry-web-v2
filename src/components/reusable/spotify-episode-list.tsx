import { motion } from 'framer-motion';
import { useState } from 'react';
import { Icon } from '@iconify/react';

interface SpotifyEpisodeListProps {
  episodeUrls: string[]; // e.g. https://open.spotify.com/episode/<id>
  max?: number;
  compact?: boolean;
  className?: string;
}

function extractEpisodeId(url: string): string | null {
  try {
    const u = new URL(url);
    const parts = u.pathname.split('/').filter(Boolean);
    const idx = parts.findIndex((p) => p === 'episode');
    if (idx !== -1 && parts[idx + 1]) return parts[idx + 1];
    return null;
  } catch {
    return null;
  }
}

const SpotifyEpisodeList: React.FC<SpotifyEpisodeListProps> = ({
  episodeUrls,
  max = 4,
  compact = true,
  className = '',
}) => {
  const display = episodeUrls.slice(0, max);
  const height = compact ? 152 : 232;
  const [failedEpisodes, setFailedEpisodes] = useState<Set<string>>(new Set());

  const handleIframeError = (id: string) => {
    setFailedEpisodes((prev) => new Set([...prev, id]));
  };

  return (
    <div className={className}>
      <div className="grid grid-cols-1 gap-4">
        {display.map((url, i) => {
          const id = extractEpisodeId(url);
          if (!id) return null;
          
          const hasFailed = failedEpisodes.has(id);
          
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="overflow-hidden rounded-lg shadow"
            >
              {hasFailed ? (
                // Fallback UI when iframe fails
                <div className="bg-gradient-to-r from-[#1DB954] to-[#1ed760] p-4 rounded-lg flex flex-col items-center justify-center min-h-[152px] text-white">
                  <Icon icon="mdi:spotify" fontSize={48} className="mb-3" />
                  <p className="text-sm font-medium mb-2">Episode unavailable</p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-[#1DB954] px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors"
                  >
                    Open in Spotify
                    <Icon icon="fluent:arrow-right-16-filled" fontSize={16} />
                  </a>
                </div>
              ) : (
                <div className="relative">
                  <iframe
                    src={`https://open.spotify.com/embed/episode/${id}?utm_source=generator`}
                    width="100%"
                    height={height}
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    onError={() => handleIframeError(id)}
                    onLoad={(e) => {
                      // Check if iframe loaded successfully
                      // If content is empty or error, show fallback
                      const iframe = e.target as HTMLIFrameElement;
                      if (iframe.contentWindow) {
                        try {
                          // Try to detect if there's an error
                          setTimeout(() => {
                            if (!iframe.contentDocument || !iframe.contentDocument.body.innerHTML) {
                              handleIframeError(id);
                            }
                          }, 5000); // Wait 5 seconds for load
                        } catch {
                          // Cross-origin error means it loaded, but we can't check content
                          // This is expected behavior
                        }
                      }
                    }}
                  />
                  {/* Timeout detection */}
                  <div
                    className="absolute inset-0 bg-transparent pointer-events-none"
                    style={{
                      animation: hasFailed ? 'none' : 'fadeOut 6s forwards',
                    }}
                  />
                  <style>{`
                    @keyframes fadeOut {
                      0% { opacity: 0; }
                      95% { opacity: 0; }
                      100% { opacity: 1; }
                    }
                  `}</style>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SpotifyEpisodeList;


