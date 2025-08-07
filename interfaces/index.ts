import { ReactNode } from "react";

export interface ComponentProps {
  children: ReactNode;
}

export interface ButtonProps {
  title: string;
  action?: () => void;
}

// ✅ Make `id` required here:
export interface MovieProps {
  id: string;
  posterImage: string;
  releaseYear: string;
  title: string;
}

// Raw API types — good for internal data mapping
interface PrimaryImage {
  url: string;
}

interface TitleText {
  text: string;
}

interface ReleaseYear {
  year: string;
}

export interface MoviesProps {
  id: string;
  primaryImage: PrimaryImage;
  titleText: TitleText;
  releaseYear: ReleaseYear;
}
