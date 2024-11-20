import AppRouter from './components/AppRouter';
import Header from './components/Header';
import SocialMediaHandles from './components/SocialMediaHandles';

function App() {
  return (
    <div className="App">
      <Header/>
      <button className="flex mx-auto px-4 text-white items-center p-2 rounded-lg shadow-lg bg-blue-500 shadow-blue-500/50">
        A special school run by Health and Education for All (HEAL) providing free education for disadvantaged & underprivileged children
      </button>

      <AppRouter/>
      <SocialMediaHandles/>
    </div>
  );
}

export default App;
