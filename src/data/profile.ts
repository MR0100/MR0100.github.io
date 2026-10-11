// Facts about Mitul come from portfolio-content/work/profile.json (synced to src/content/work/). This file only computes from them.
// This is a personal site, not a hiring page: no freelancing platforms are mentioned anywhere.
import data from '../content/work/profile.json';

export const profile = data.profile;
export const counts = data.counts;
export const experience = data.experience;
export const testimonials = data.testimonials;
export const FIRST_JOB = new Date(data.profile.firstJob);

export function yearsOfExperience(now = new Date()): number {
  const ms = now.getTime() - FIRST_JOB.getTime();
  return Math.floor(ms / (365.25 * 24 * 3600 * 1000));
}

// "almost 7 years" in the last two months before an anniversary, "7+ years" after it.
export function experienceLabel(now = new Date()): string {
  const months = (now.getFullYear() - FIRST_JOB.getFullYear()) * 12 + (now.getMonth() - FIRST_JOB.getMonth());
  const y = Math.floor(months / 12), m = months % 12;
  return m >= 10 ? `almost ${y + 1} years` : `${y}+ years`;
}
