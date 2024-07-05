import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = (event) => {
    event.preventDefault();

    let error = false;
    const newErrors = {};

    if (!name) {
      error = true;
      newErrors.name = 'El nombre es obligatorio.';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      error = true;
      newErrors.email = 'Introduce un correo electrónico válido.';
    }

    if (!message) {
      error = true;
      newErrors.message = 'El mensaje es obligatorio.';
    }

    setErrors(newErrors);

    if (!error) {
      console.log('Formulario enviado:', { name, email, message });
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setEmail('');
        setMessage('');
        setErrors({});
      }, 3000);
    }
  };

  return (
    <section id="contact">
      <h2>Contacto</h2>
      <form onSubmit={validateForm} style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          alignItems: 'flex-start',
        }}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={`form-control ${errors.name ? 'error' : ''}`}
        />
        {errors.name && (
          <p className="error-message">{errors.name}</p>
        )}

        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`form-control ${errors.email ? 'error' : ''}`}
        />
        {errors.email && (
          <p className="error-message danger">{errors.email}</p>
        )}

        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className={`form-control ${errors.message ? 'error' : ''}`}
        />
        {errors.message && (
          <p className="error-message">{errors.message}</p>
        )}

        <button type="submit" disabled={submitted} className="btn btn-primary">
          Enviar
        </button>

        {submitted && <p className="success">¡Mensaje enviado!</p>}
      </form>
    </section>
  );
};

export default ContactForm;
