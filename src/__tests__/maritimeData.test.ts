import { describe, it, expect } from 'vitest';
import {
  statisticsData,
  servicesData,
  vesselTypesData,
  recruitmentStepsData,
  jobsData,
  galleryData,
  teamMembersData,
  faqData,
} from '@/data/maritimeData';

describe('Maritime Data Integrity', () => {
  it('contains non-empty statistics data', () => {
    expect(statisticsData.length).toBeGreaterThan(0);
    expect(statisticsData[0]).toHaveProperty('number');
    expect(statisticsData[0]).toHaveProperty('label');
  });

  it('contains valid service items with details', () => {
    expect(servicesData.length).toBe(6);
    servicesData.forEach((service) => {
      expect(service.id).toBeDefined();
      expect(service.title).not.toBe('');
      expect(service.features.length).toBeGreaterThan(0);
    });
  });

  it('contains 6 vessel types', () => {
    expect(vesselTypesData.length).toBe(6);
  });

  it('contains 6 recruitment steps', () => {
    expect(recruitmentStepsData.length).toBe(6);
    expect(recruitmentStepsData[0].step).toBe(1);
    expect(recruitmentStepsData[5].step).toBe(6);
  });

  it('contains valid jobs data', () => {
    expect(jobsData.length).toBeGreaterThan(0);
    expect(jobsData[0].rank).toBeDefined();
  });

  it('contains FAQs for both shipowners and seafarers', () => {
    expect(faqData.shipowners.length).toBeGreaterThan(0);
    expect(faqData.seafarers.length).toBeGreaterThan(0);
  });
});
