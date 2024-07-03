import { PhotoTable } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFallback(username: string | null | undefined) {
  if (!username) return "NA";
  const words = username.split(" ");

  // Get the first two words
  const firstWord = words[0];
  const secondWord = words.length > 1 ? words[1] : "";

  // Extract the first letters of the first two words
  const firstLetterFirstWord = firstWord.charAt(0);
  const firstLetterSecondWord = secondWord.charAt(0);

  // Concatenate the first letters to form the fallback
  const fallback =
    firstLetterFirstWord.toUpperCase() + firstLetterSecondWord.toUpperCase();

  return fallback;
}

export const countPhotosUploadedToday = (photos: PhotoTable[]) => {
  // Get today's date at midnight
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Filter photos whose date is equal to today
  const photosUploadedToday = photos.filter((photo) => {
    // We compare the dates by converting them to midnight to ignore the exact time
    const photoDate = new Date(photo.date);
    photoDate.setHours(0, 0, 0, 0); // Setting at midnight

    return photoDate.getTime() === today.getTime(); // Comparison by timestamp
  });

  // Return the number of photos downloaded today
  return photosUploadedToday.length;
};

export const countPhotosUploadedThisWeek = (photos: PhotoTable[]) => {
  // Function to get the start and end of the current week
  const getWeekRange = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
    const startOfWeek = new Date(today); // Copy the Date object to avoid mutation
    startOfWeek.setDate(today.getDate() - dayOfWeek); // Adjustment to Monday of the current week
    startOfWeek.setHours(0, 0, 0, 0); // Start of the day

    const endOfWeek = new Date(today); // Copy the Date object to avoid mutation
    endOfWeek.setDate(today.getDate() - dayOfWeek + 6); // Adjustment to Sunday of the current week
    endOfWeek.setHours(23, 59, 59, 999); // End of the day

    return { startOfWeek, endOfWeek };
  };

  // Get the start and end of the current week
  const { startOfWeek, endOfWeek } = getWeekRange();

  // Filter photos uploaded this week
  const photosUploadedThisWeek = photos.filter((photo) => {
    const photoDate = new Date(photo.date);
    return photoDate >= startOfWeek && photoDate <= endOfWeek;
  });

  // Return the number of photos downloaded this week
  return photosUploadedThisWeek.length;
};

export const countPhotosUploadedThisMonth = (photos: PhotoTable[]) => {
  // Function to get the start and end of the current month
  const getMonthRange = () => {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    return { startOfMonth, endOfMonth };
  };

  // Get the start and end of the current month
  const { startOfMonth, endOfMonth } = getMonthRange();

  // Filter photos uploaded this month
  const photosUploadedThisMonth = photos.filter((photo) => {
    const photoDate = new Date(photo.date);
    return photoDate >= startOfMonth && photoDate <= endOfMonth;
  });

  // Return the number of photos uploaded this month
  return photosUploadedThisMonth.length;
};

export const countPhotosUploadedThisYear = (photos: PhotoTable[]) => {
  // Function to get the start and end of the current year
  const getYearRange = () => {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const endOfYear = new Date(today.getFullYear(), 11, 31);

    return { startOfYear, endOfYear };
  };

  // Get the start and end of the current year
  const { startOfYear, endOfYear } = getYearRange();

  // Filter photos uploaded this year
  const photosUploadedThisYear = photos.filter((photo) => {
    const photoDate = new Date(photo.date);
    return photoDate >= startOfYear && photoDate <= endOfYear;
  });

  // Return the number of photos uploaded this year
  return photosUploadedThisYear.length;
};

export const getPhotoCountsByDays = (photos: PhotoTable[]) => {
  const photoCounts = Array(7).fill(0);

  photos.forEach((photo) => {
    const createdAt = new Date(photo.date);
    const dayOfWeek = createdAt.getDay();
    photoCounts[dayOfWeek]++;
  });

  return photoCounts;
};

export const getPhotoCountsByDayOfWeek = (photos: PhotoTable[]) => {
  const photoCounts = Array(7).fill(0);
  const currentDate = new Date();

  // Calculate the start of the current week (Sunday)
  const startOfWeek = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() - currentDate.getDay()
  );
  startOfWeek.setHours(0, 0, 0, 0); // Set to the start of the day (midnight)

  // Calculate the end of the current week (Saturday)
  const endOfWeek = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + (6 - currentDate.getDay())
  );
  endOfWeek.setHours(23, 59, 59, 999); // Set to the end of the day (just before midnight)

  photos.forEach((photo) => {
    const createdAt = new Date(photo.date);

    if (createdAt >= startOfWeek && createdAt <= endOfWeek) {
      const dayOfWeek = createdAt.getDay();
      photoCounts[dayOfWeek]++;
    }
  });

  return photoCounts;
};

export const getPhotoCountsByMonths = (photos: PhotoTable[]) => {
  const photoCounts = Array(12).fill(0);

  photos.forEach((photo) => {
    const createdAt = new Date(photo.date);
    const month = createdAt.getMonth();

    photoCounts[month]++;
  });

  return photoCounts;
};
