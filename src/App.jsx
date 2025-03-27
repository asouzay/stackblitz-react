import { auth } from './config/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const autenticarComFirebase = async (evento) => {
    evento.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      alert('𝑳𝒐𝒈𝒂𝒅𝒐 𝒄𝒐𝒎 𝑺𝒖𝒄𝒆𝒔𝒔𝒐!');
    } catch (err) {
      alert('𝑬𝒓𝒓𝒐 𝒏𝒐 𝒑𝒓𝒐𝒄𝒆𝒔𝒔𝒐', err);
    }
  };

  return (
    <main>
      <form onSubmit={autenticarComFirebase}>
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          name="email"  
          type="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />

        <label htmlFor="password">Senha:</label>
        <input
          id="password"
          name="password"
          type="password"  
          value={senha}
          onChange={(evento) => setSenha(evento.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}
