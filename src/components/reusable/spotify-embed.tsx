import { useRef, useState, useEffect } from 'react';

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: any) => void;
  }
}

interface SpotifyEmbedProps {
  uri?: string; // e.g. "spotify:show:36anmwQqvL43s64Kzcx987" or playlist/episode URIs
  height?: number | string; // default 352
  className?: string;
}

const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({
  uri = 'spotify:show:36anmwQqvL43s64Kzcx987',
  height = 352,
  className = '',
}) => {
  const embedRef = useRef<HTMLDivElement | null>(null);
  const spotifyEmbedControllerRef = useRef<any | null>(null);
  const [iFrameAPI, setIFrameAPI] = useState<any | undefined>(undefined);
  const [playerLoaded, setPlayerLoaded] = useState(false);
  const [currentUri] = useState(uri);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://open.spotify.com/embed/iframe-api/v1';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (iFrameAPI) return;
    window.onSpotifyIframeApiReady = (SpotifyIframeApi: any) => {
      setIFrameAPI(SpotifyIframeApi);
    };
  }, [iFrameAPI]);

  useEffect(() => {
    if (playerLoaded || iFrameAPI === undefined) return;

    iFrameAPI.createController(
      embedRef.current,
      {
        width: '100%',
        height: String(height),
        uri: currentUri,
      },
      (spotifyEmbedController: any) => {
        spotifyEmbedController.addListener('ready', () => {
          setPlayerLoaded(true);
        });

        const handlePlaybackUpdate = (_e: any) => {
          // Optional: add analytics here if needed
          // Destructured variables are commented out to avoid unused variable errors
          // const { position, duration, isBuffering, isPaused, playingURI } = e.data || {};
          // console.log({ position, duration, isBuffering, isPaused, playingURI });
        };

        spotifyEmbedController.addListener('playback_update', handlePlaybackUpdate);
        spotifyEmbedController.addListener('playback_started', () => {
          // Optional: analytics hook
        });

        spotifyEmbedControllerRef.current = spotifyEmbedController;
      },
    );

    return () => {
      if (spotifyEmbedControllerRef.current) {
        spotifyEmbedControllerRef.current.removeListener('playback_update');
      }
    };
  }, [playerLoaded, iFrameAPI, currentUri, height]);

  const onPauseClick = () => {
    if (spotifyEmbedControllerRef.current) {
      spotifyEmbedControllerRef.current.pause();
    }
  };

  const onPlayClick = () => {
    if (spotifyEmbedControllerRef.current) {
      spotifyEmbedControllerRef.current.play();
    }
  };


  return (
    <div className={className}>
      <div ref={embedRef} />
      {!playerLoaded && <p className="text-center text-[#929292] mt-2">Loading player…</p>}

      {/* Minimal controls; hide if not needed */}
      <div className="flex items-center gap-3 mt-3">
        <button
          aria-label="Play"
          onClick={onPlayClick}
          className="bg-[#075056] text-white px-4 py-2 rounded hover:bg-[#064a4f] transition-colors"
        >
          Play
        </button>
        <button
          aria-label="Pause"
          onClick={onPauseClick}
          className="bg-[#E4EEF0] text-[#010101] px-4 py-2 rounded hover:opacity-90 transition-colors"
        >
          Pause
        </button>
      </div>

      {/* Optional input for switching URIs during dev; can be removed */}
      {/* <div className="mt-3">
        <input
          type="text"
          value={currentUri}
          onChange={onUriChange}
          placeholder="Enter Spotify URI"
          className="w-full px-3 py-2 rounded border border-gray-300"
        />
      </div> */}
    </div>
  );
};

export default SpotifyEmbed;


