import React, { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ExternalLink,
  Globe,
  Video,
  Music,
  Image as ImageIcon,
  Play,
} from "lucide-react";

const YOUTUBE_PATTERNS = [
  /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/,
  /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^/?]+)/,
  /(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([^/?]+)/,
  /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([^/?]+)/,
  /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^/?]+)/,
];

const URL_REGEX = /(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/g;
const VIDEO_EXTENSIONS = /\.(mp4|webm|ogg)$/i;
const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png|gif|webp)$/i;
const TWITTER_REGEX =
  /(?:https?:\/\/)?(?:www\.)?x\.com\/[a-zA-Z0-9_]+\/status\/[0-9]+/;
const SPOTIFY_REGEX =
  /(?:https?:\/\/)?(?:open\.)?spotify\.com\/(?:track|album|playlist|artist)\/([a-zA-Z0-9]+)/;
  const GIPHY_REGEX = /(?:https?:\/\/)?(?:media\.)?giphy\.com/;

const getYouTubeVideoId = (url) => {
  for (const pattern of YOUTUBE_PATTERNS) {
    const match = url.match(pattern);
    if (match) {
      return match[1].split("?")[0];
    }
  }
  return null;
};

const getLinkType = (url) => {
  if (getYouTubeVideoId(url)) return "youtube";
  if (TWITTER_REGEX.test(url)) return "twitter";
  if (SPOTIFY_REGEX.test(url)) return "spotify";
  if (GIPHY_REGEX.test(url)) return "gif"; 
  if (VIDEO_EXTENSIONS.test(url)) return "video";
  if (IMAGE_EXTENSIONS.test(url)) return "image";
  return "url";
};

const PreviewCard = ({ url, type }) => {
  const content = useMemo(() => {
    switch (type) {
      case "youtube": {
        const videoId = getYouTubeVideoId(url);
        if (!videoId) return null;

        const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

        return (
          <Card className="w-full overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="aspect-video relative">
                <img
                  src={thumbnailUrl}
                  alt="YouTube thumbnail"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/api/placeholder/400/225";
                  }}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                  <div className="w-16 h-12 bg-red-600 rounded-lg flex items-center justify-center relative group-hover:bg-red-700 transition-colors">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-red-600 flex-shrink-0"
                    >
                      <path
                        fill="currentColor"
                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                      />
                    </svg>
                    <div className="text-white text-sm font-medium truncate">
                      YouTube Video
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      }

      case "gif":
        return (
          <div className="relative group">
            <img
              src={url}
              alt="GIF"
              className="w-full h-48 object-cover rounded-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/api/placeholder/400/225";
              }}
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-white text-sm">GIF</div>
            </div>
          </div>
        );

      case "twitter":
        return (
          <div className="flex items-center gap-3 p-2">
            <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-medium">Twitter Post</div>
              <div className="text-xs text-muted-foreground">
                View on Twitter
              </div>
            </div>
          </div>
        );

      case "image":
        return (
          <div className="relative group">
            <img
              src={url}
              alt="Link preview"
              className="w-full h-48 object-cover rounded-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/api/placeholder/400/225";
              }}
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <ImageIcon className="w-8 h-8 text-white" />
            </div>
          </div>
        );

      case "video":
        return (
          <div className="relative group">
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <Video className="w-12 h-12 text-gray-400" />
            </div>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Play className="w-8 h-8 text-white" />
            </div>
          </div>
        );

      default:
        return (
          <div className="flex items-center gap-3 p-2">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate max-w-[200px]">
                {url.replace(/^https?:\/\//, "")}
              </div>
              <div className="text-xs text-muted-foreground">Click to open</div>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
          </div>
        );
    }
  }, [url, type]);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      {content}
    </a>
  );
};

const LinkPreviewHandler = ({ content }) => {
  const { links, textContent } = useMemo(() => {
    const matches = content.match(URL_REGEX) || [];
    let processedContent = content;
    matches.forEach((url) => {
      processedContent = processedContent.replace(url, "");
    });

    return {
      links: matches.map((url) => ({
        url,
        type: getLinkType(url),
      })),
      textContent: processedContent.trim(),
    };
  }, [content]);

  return (
    <div className="space-y-2">
      {textContent && <div className="whitespace-pre-wrap">{textContent}</div>}
      {links.length > 0 && (
        <div className="space-y-2 mt-2">
          {links.map((link, i) => (
            <PreviewCard key={i} {...link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LinkPreviewHandler;
