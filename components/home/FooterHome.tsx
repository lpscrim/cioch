import ContactButton from '../contact/ContactButton';
import Footer from '../Footer';

export default function FooterHome() {
  return (
    <div className="relative w-full min-h-[95vh] sm:min-h-[100vh] h-full z-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl text-center py-16 sm:py-24 lg:py-32">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-text-secondary sm:text-5xl">
            Give us a message or put your order in today!
          </p>
          <div className="mt-12 flex justify-center">
            <ContactButton>
            <p
              className="rounded-md bg-secondary px-4 py-3 text-base font-bold text-primary shadow-xs hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Contact us
            </p>
            </ContactButton>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
