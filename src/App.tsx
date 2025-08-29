import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ErrorBoundary } from "react-error-boundary";
import {AppRoutes } from './components/AppRoutes';
import {ErrorFallback} from './components/ErrorFallback';

function App() {
  return (
      <Router>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="App">
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
           <AppRoutes />
        </div>
        </ErrorBoundary>
      </Router>
  );
}

export default App;
