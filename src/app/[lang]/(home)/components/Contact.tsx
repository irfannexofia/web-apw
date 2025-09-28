"use client";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import React, { useState } from "react";

interface Dictionary {
  contact: {
    title: string;
    subtitle: string;
    address: {
      title: string;
      mainOffice: {
        title: string;
        address: string;
        hours: string;
      };
    };
    phone: {
      title: string;
      marketing: {
        label: string;
        number: string;
      };
      direct: {
        label: string;
        number: string;
      };
      purchasing: {
        label: string;
        number: string;
      };
      financial: {
        label: string;
        number: string;
      };
      fax: {
        label: string;
        number: string;
      };
    };
    email: {
      title: string;
      general: {
        label: string;
        address: string;
      };
      product: {
        label: string;
        address: string;
      };
      technical: {
        label: string;
        address: string;
      };
    };
    form: {
      title: string;
      successMessage: string;
      errorMessage: string;
      fields: {
        name: {
          label: string;
          placeholder: string;
        };
        email: {
          label: string;
          placeholder: string;
        };
        phone: {
          label: string;
          placeholder: string;
        };
        company: {
          label: string;
          placeholder: string;
        };
        service: {
          label: string;
          placeholder: string;
          options: {
            welding: string;
            valve: string;
            products: string;
            consultation: string;
          };
        };
        message: {
          label: string;
          placeholder: string;
        };
      };
      submit: {
        sending: string;
        send: string;
      };
      whatsapp: string;
      note: string;
    };
    map_title: string;
    whatsapp_chat: string;
    linkedin_page: string;
    cta_text: string;
  };
}

interface ContactProps {
  dictionary: Dictionary;
}

const Contact = ({ dictionary }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 2000);
  };

  // Simplified contact data
  const contactInfo = {
    phone: "021 22556660",
    email: "anugerahpancawisesa@gmail.com",
    whatsapp1: "087888505087",
    whatsapp2: "081806791476",
  };

  const services = [
    dictionary.contact.form.fields.service.options.welding,
    dictionary.contact.form.fields.service.options.valve,
    dictionary.contact.form.fields.service.options.products,
    dictionary.contact.form.fields.service.options.consultation,
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-4">
            <IconifyIcon
              icon="lucide:message-circle"
              className="w-4 h-4 mr-2"
            />
            {dictionary.contact.title}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {dictionary.contact.subtitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {dictionary.contact.cta_text}
          </p>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {dictionary.contact.map_title}
            </h3>
            <p className="text-gray-600 text-center mb-6">
              PT. Anugerah Panca Wisesa - Industrial Product Distribution
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6467.511214446749!2d106.69375219999999!3d-6.0913998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a03dc0d3314f3%3A0x26254c8b38754ef7!2sPT.%20Anugerah%20Panca%20Wisesa!5e1!3m2!1sid!2sid!4v1758230075604!5m2!1sid!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PT. Anugerah Panca Wisesa Location"
              />
            </div>
          </div>
        </div>

        {/* Professional Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Office Hours & Location */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                <IconifyIcon
                  icon="lucide:clock"
                  className="w-6 h-6 text-white"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Office Hours
                </h3>
                <p className="text-primary font-medium">Business Hours</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <IconifyIcon
                  icon="lucide:calendar"
                  className="w-4 h-4 text-primary mr-3"
                />
                <span className="text-gray-700">Monday - Friday</span>
              </div>
              <div className="flex items-center">
                <IconifyIcon
                  icon="lucide:clock"
                  className="w-4 h-4 text-primary mr-3"
                />
                <span className="text-gray-700">08:00 - 17:00 WIB</span>
              </div>
              <div className="flex items-center">
                <IconifyIcon
                  icon="lucide:calendar-x"
                  className="w-4 h-4 text-red-500 mr-3"
                />
                <span className="text-gray-700">Saturday - Sunday: Closed</span>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                <IconifyIcon
                  icon="lucide:phone"
                  className="w-6 h-6 text-white"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Quick Contact
                </h3>
                <p className="text-primary font-medium">Call Us Now</p>
              </div>
            </div>
            <div className="space-y-4">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <IconifyIcon
                  icon="lucide:phone"
                  className="w-5 h-5 text-blue-600 mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-blue-600">
                    Phone
                  </div>
                  <div className="text-sm text-gray-600">
                    {contactInfo.phone}
                  </div>
                </div>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
              >
                <IconifyIcon
                  icon="lucide:mail"
                  className="w-5 h-5 text-primary mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-primary">
                    Email
                  </div>
                  <div className="text-sm text-gray-600">
                    {contactInfo.email}
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Location Info */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                <IconifyIcon
                  icon="lucide:map-pin"
                  className="w-6 h-6 text-white"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Location</h3>
                <p className="text-primary font-medium">Our Office</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <IconifyIcon
                  icon="lucide:building"
                  className="w-4 h-4 text-primary mr-3 mt-1"
                />
                <span className="text-gray-700 text-sm">
                  Jl. Raya Prancis, Ruko Villa Taman Bandara Blok N8/15
                </span>
              </div>
              <div className="flex items-start">
                <IconifyIcon
                  icon="lucide:map-pin"
                  className="w-4 h-4 text-primary mr-3 mt-1"
                />
                <span className="text-gray-700 text-sm">
                  Kel. Dadap, Kec. Kosambi, Tangerang 15211
                </span>
              </div>
              <div className="flex items-start">
                <IconifyIcon
                  icon="lucide:flag"
                  className="w-4 h-4 text-primary mr-3 mt-1"
                />
                <span className="text-gray-700 text-sm">Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Simplified Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <IconifyIcon
                      icon="lucide:phone"
                      className="w-6 h-6 text-blue-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                      className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center p-4 bg-primary/10 rounded-lg">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <IconifyIcon
                      icon="lucide:mail"
                      className="w-6 h-6 text-primary"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-primary hover:text-primaryDark transition-colors font-medium"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <a
                      href={`https://wa.me/62${contactInfo.whatsapp1}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <IconifyIcon
                          icon="logos:whatsapp-icon"
                          className="w-5 h-5 text-green-600"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-green-600">
                          WhatsApp 1
                        </div>
                        <div className="text-sm text-green-600">
                          {contactInfo.whatsapp1}
                        </div>
                      </div>
                    </a>
                    <a
                      href={`https://wa.me/62${contactInfo.whatsapp2}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <IconifyIcon
                          icon="logos:whatsapp-icon"
                          className="w-5 h-5 text-green-600"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-green-600">
                          WhatsApp 2
                        </div>
                        <div className="text-sm text-green-600">
                          {contactInfo.whatsapp2}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-primary to-apw-mid-gray rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
              <p className="text-white/90 mb-6">
                For immediate assistance, use WhatsApp for fastest response.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/62${contactInfo.whatsapp1}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
                >
                  <IconifyIcon
                    icon="logos:whatsapp-icon"
                    className="w-5 h-5 mr-2"
                  />
                  WhatsApp Chat
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-lg transition-colors"
                >
                  <IconifyIcon icon="lucide:mail" className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {dictionary.contact.form.title}
              </h3>

              {submitStatus === "success" && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  {dictionary.contact.form.successMessage}
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  {dictionary.contact.form.errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {dictionary.contact.form.fields.name.label}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder={
                      dictionary.contact.form.fields.name.placeholder
                    }
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {dictionary.contact.form.fields.email.label}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder={
                      dictionary.contact.form.fields.email.placeholder
                    }
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {dictionary.contact.form.fields.phone.label}
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder={
                      dictionary.contact.form.fields.phone.placeholder
                    }
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {dictionary.contact.form.fields.company.label}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder={
                      dictionary.contact.form.fields.company.placeholder
                    }
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {dictionary.contact.form.fields.service.label}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">
                      {dictionary.contact.form.fields.service.placeholder}
                    </option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {dictionary.contact.form.fields.message.label}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder={
                      dictionary.contact.form.fields.message.placeholder
                    }
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primaryDark transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <IconifyIcon
                          icon="lucide:loader-2"
                          className="w-5 h-5 mr-2 animate-spin"
                        />
                        {dictionary.contact.form.submit.sending}
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <IconifyIcon
                          icon="lucide:send"
                          className="w-5 h-5 mr-2"
                        />
                        {dictionary.contact.form.submit.send}
                      </span>
                    )}
                  </button>

                  <a
                    href={`https://wa.me/62${contactInfo.whatsapp1}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-8 py-4 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold rounded-lg transition-all duration-300 text-center flex items-center justify-center"
                  >
                    <IconifyIcon
                      icon="logos:whatsapp-icon"
                      className="w-5 h-5 mr-2"
                    />
                    {dictionary.contact.form.whatsapp}
                  </a>
                </div>
              </form>

              <p className="text-sm text-gray-500 mt-4 text-center">
                {dictionary.contact.form.note}
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary to-apw-mid-gray rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Partner with APW?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {dictionary.contact.cta_text}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <IconifyIcon icon="lucide:package" className="w-5 h-5 mr-2" />
                View Products
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-lg transition-all duration-300"
              >
                <IconifyIcon
                  icon="lucide:message-circle"
                  className="w-5 h-5 mr-2"
                />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
