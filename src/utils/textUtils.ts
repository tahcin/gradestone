/**
 * Utility functions for text processing
 */

/**
 * Extracts initials from a title while ignoring common connecting words
 * @param title - The title to extract initials from
 * @returns The initials of the title
 */
export function getInitialsExcludingCommonWords(title: string): string {
  // List of common words to ignore when generating initials
  const wordsToIgnore = ['of', 'and', 'the', 'in', 'on', 'at', 'to', 'for', 'with', 'by'];
  
  // Split the title into words
  const words = title.split(' ');
  
  // Filter out the common words and map to first character
  const initials = words
    .filter(word => !wordsToIgnore.includes(word.toLowerCase()))
    .map(word => word[0]);
  
  // Join the initials together
  return initials.join('');
}