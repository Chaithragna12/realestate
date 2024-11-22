import  { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://your-backend-endpoint.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ Name: '', Email: '', Message: '' }); // Reset form fields
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
      console.error(error);
    }
  };

  return (
    <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Contact <span className="underline underline-offset-4 decoration-1 under font-light">With Us</span>
      </h1>
      <p className="text-gray-500 max-w-80 mx-auto text-center mb-12">
        Ready to Make a Move? Let’s Build Your Future Together
      </p>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              name="Name"
              type="text"
              placeholder="Your Name"
              value={formData.Name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              name="Email"
              type="email"
              placeholder="Your Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            value={formData.Message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">Send Message</button>
      </form>

      {status && <p className="text-gray-700 mt-4">{status}</p>}
    </div>
  );
};

export default Contact;
