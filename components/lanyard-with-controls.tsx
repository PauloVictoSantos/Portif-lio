"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Lanyard from "@/components/ui/lanyard";
import CardTemplate, { type CardTemplateRef, type CardVariant } from "@/components/card-template";
import { encryptLanyardData } from "@/lib/utils";

const MAX_CHARACTERS = 20;

interface LanyardWithControlsProps {
  position?: [number, number, number];
  containerClassName?: string;
  defaultName?: string;
  defaultRole?: string;
  defaultAge?: number;
  defaultImage?: string;
  defaultVariant?: CardVariant;
}

export default function LanyardWithControls({
  position = [0, 0, 20],
  containerClassName,
  defaultName = "Paulo Victor",
  defaultRole = "Software Engineer",
  defaultAge = 22,
  defaultImage = "/profile.jpg",
  defaultVariant = "dark",
}: LanyardWithControlsProps) {
  const [inputValue, setInputValue] = useState(defaultName);
  const [appliedName, setAppliedName] = useState(defaultName);
  const [cardVariant, setCardVariant] = useState<CardVariant>(defaultVariant);
  const [appliedVariant, setAppliedVariant] = useState<CardVariant>(defaultVariant);
  const [cardTextureUrl, setCardTextureUrl] = useState<string | undefined>(undefined);
  const [textureKey, setTextureKey] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const cardTemplateRef = useRef<CardTemplateRef>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Auto-capture texture when component mounts with a defaultName from URL
  useEffect(() => {
    // If no defaultName, mark as initialized immediately
    if (!defaultName) {
      setIsInitialized(true);
      return;
    }

    // If there's a defaultName, wait for card template to render then capture
    const timer = setTimeout(async () => {
      if (cardTemplateRef.current) {
        await cardTemplateRef.current.captureTexture();
      }
      setIsInitialized(true);
    }, 150);

    return () => clearTimeout(timer);
  }, [defaultName]);



  const handleTextureReady = useCallback((dataUrl: string) => {
    setCardTextureUrl(dataUrl);
    setTextureKey((prev) => prev + 1);
  }, []);


  // Show loading spinner while waiting for initialization
  if (!isInitialized) {
    return (
      <div className="flex flex-col">
        <CardTemplate
          ref={cardTemplateRef}
          userName={inputValue}
          role={defaultRole}
          age={defaultAge}
          image={defaultImage}
          variant={cardVariant}
          onTextureReady={handleTextureReady}
        />
        <div className={containerClassName}>
          <div className="flex h-full items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Lanyard
        key={textureKey}
        position={position}
        containerClassName={containerClassName}
        cardTextureUrl={cardTextureUrl}
        canvasRef={canvasRef}
      />
    </div>
  );
}
