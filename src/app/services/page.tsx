'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UserPlus,
  Users,
  FileCheck,
  GraduationCap,
  CreditCard,
  Plane,
  Check,
  ArrowRight,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { servicesData, ServiceItem } from '@/data/maritimeData';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'UserPlus':
        return <UserPlus className="w-7 h-7 text-white" />;
      case 'Users':
        return <Users className="w-7 h-7 text-white" />;
      case 'FileCheck':
        return <FileCheck className="w-7 h-7 text-white" />;
      case 'GraduationCap':
        return <GraduationCap className="w-7 h-7 text-white" />;
      case 'CreditCard':
        return <CreditCard className="w-7 h-7 text-white" />;
      case 'Plane':
        return <Plane className="w-7 h-7 text-white" />;
      default:
        return <UserPlus className="w-7 h-7 text-white" />;
    }
  };

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0A2540] to-[#1E3A8A] text-white py-16 mb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4"
          >
            End-to-End Maritime Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-blue-100 font-light"
          >
            Comprehensive crew recruitment, management, compliance, and logistical support for international shipowners.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="h-full flex flex-col justify-between cursor-pointer group hover:border-blue-300"
                onClick={() => setSelectedService(service)}
              >
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3 group-hover:text-[#1E3A8A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 text-[#1E3A8A] font-semibold text-sm flex items-center group-hover:gap-2 transition-all">
                  <span>Learn Details</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
        >
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-base">
              {selectedService.details}
            </p>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-[#0A2540] mb-3">Key Highlights:</h4>
              <ul className="space-y-2.5">
                {selectedService.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700 font-medium">
                    <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end pt-4">
              <Button onClick={() => setSelectedService(null)} variant="primary">
                Close Details
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
