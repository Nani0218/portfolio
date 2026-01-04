import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 6281825284',
    href: 'tel:+916281825284'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'kambalanaga18@gmail.com',
    href: 'mailto:kambalanaga18@gmail.com'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Jaggayyapet, Andhra Pradesh, India',
    href: null
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/kambala-naga-veerendra-kumar-35921134a'
  }
];

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Form submitted:', data);

    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. I will get back to you soon.',
    });

    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-16 xl:py-24 px-4 xl:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50 animate-in fade-in duration-700"
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-8 xl:space-y-12">

          {/* Section Title */}
          <div className="text-center space-y-2 animate-in slide-in-from-top-6 duration-700">
            <h2 className="text-2xl xl:text-4xl font-bold text-foreground">
              Get In Touch
            </h2>
            <div className="w-16 xl:w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-base xl:text-lg text-muted-foreground mt-4">
              Feel free to reach out for collaborations or just a friendly chat
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

            {/* Contact Information */}
            <div className="space-y-6 animate-in slide-in-from-left-8 duration-700">
              <Card className="border-2 transition-all duration-500 hover:-translate-y-1 hover:border-purple-400 hover:shadow-xl bg-gradient-to-br from-white to-purple-50">
                <CardHeader>
                  <CardTitle className="text-xl xl:text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;

                    const content = (
                      <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-500 hover:bg-indigo-50 hover:scale-[1.02]">
                        <div className="p-2 rounded-lg bg-indigo-100 transition-all duration-500">
                          <Icon className="h-5 w-5 text-indigo-600 transition-all duration-500" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="text-base font-medium text-foreground break-words">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    );

                    return info.href ? (
                      <a
                        key={index}
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-2 animate-in slide-in-from-right-8 duration-700 transition-all hover:-translate-y-1 hover:border-indigo-400 hover:shadow-xl bg-gradient-to-br from-white to-indigo-50">
              <CardHeader>
                <CardTitle className="text-xl xl:text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                    <FormField
                      control={form.control}
                      name="name"
                      rules={{ required: 'Name is required' }}
                      render={({ field }) => (
                        <FormItem className="transition-all duration-500 animate-in fade-in">
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="focus-visible:ring-2 focus-visible:ring-indigo-400 transition-all duration-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      rules={{
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      }}
                      render={({ field }) => (
                        <FormItem className="transition-all duration-500 animate-in fade-in">
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              {...field}
                              className="focus-visible:ring-2 focus-visible:ring-purple-400 transition-all duration-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      rules={{ required: 'Subject is required' }}
                      render={({ field }) => (
                        <FormItem className="transition-all duration-500 animate-in fade-in">
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="What's this about?"
                              {...field}
                              className="focus-visible:ring-2 focus-visible:ring-indigo-400 transition-all duration-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      rules={{ required: 'Message is required' }}
                      render={({ field }) => (
                        <FormItem className="transition-all duration-500 animate-in fade-in">
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message..."
                              className="min-h-32 resize-none focus-visible:ring-2 focus-visible:ring-purple-400 transition-all duration-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full gap-2 transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 shadow-lg hover:shadow-indigo-300/40"
                      disabled={isSubmitting}
                    >
                      <Send className="h-4 w-4" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
