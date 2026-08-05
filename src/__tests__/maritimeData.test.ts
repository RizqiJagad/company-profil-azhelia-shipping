import { describe, it, expect } from 'vitest';
import {
  statisticsData,
  servicesData,
  vesselTypesData,
  recruitmentStepsData,
  jobsData,
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
    expect(servicesData.length).toBe(7);
    servicesData.forEach((service) => {
      expect(service.id).toBeDefined();
      expect(service.title).not.toBe('');
      expect(service.features.length).toBeGreaterThan(0);
    });
  });

  it('contains vessel types', () => {
    expect(vesselTypesData.length).toBeGreaterThan(0);
  });

  it('contains recruitment process steps', () => {
    expect(recruitmentStepsData.length).toBe(6);
    expect(recruitmentStepsData[0].step).toBe(1);
    expect(recruitmentStepsData[5].step).toBe(6);
  });

  it('contains valid jobs data', () => {
    expect(jobsData.length).toBeGreaterThan(0);
    expect(jobsData[0].rank).toBeDefined();
  });

  it('contains official FAQ items', () => {
    expect(faqData.length).toBe(6);
    faqData.forEach((faq) => {
      expect(faq.question).toBeDefined();
      expect(faq.answer).toBeDefined();
    });
  });
});
