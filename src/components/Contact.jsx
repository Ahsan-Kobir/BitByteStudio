import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert('Thank you for contacting us!');
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div>
            <Input
              {...register('name')}
              placeholder="Your Name"
              className="w-full bg-light-card dark:bg-dark-card border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground placeholder:text-light-foreground/60 dark:placeholder:text-dark-foreground/60"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Input
              {...register('email')}
              placeholder="Your Email"
              className="w-full bg-light-card dark:bg-dark-card border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground placeholder:text-light-foreground/60 dark:placeholder:text-dark-foreground/60"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Textarea
              {...register('message')}
              placeholder="Your Message"
              className="w-full bg-light-card dark:bg-dark-card border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground placeholder:text-light-foreground/60 dark:placeholder:text-dark-foreground/60"
              rows={5}
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
};