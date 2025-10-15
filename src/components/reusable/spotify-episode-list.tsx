import { motion } from 'framer-motion';

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

  return (
    <div className={className}>
      <div className="grid grid-cols-1 gap-4">
        {display.map((url, i) => {
          const id = extractEpisodeId(url);
          if (!id) return null;
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="overflow-hidden rounded-lg shadow"
            >
              <iframe
                src={`https://open.spotify.com/embed/episode/${id}?utm_source=generator`}
                width="100%"
                height={height}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SpotifyEpisodeList;


