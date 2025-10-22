import { clsx, type ClassValue } from "clsx"; // Import ClassValue type
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) { // Use ClassValue instead of any
  return twMerge(clsx(inputs));
}
