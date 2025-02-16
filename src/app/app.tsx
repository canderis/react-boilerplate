import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FunctionComponent, Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

const App: FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<div></div>}>
				<QueryClientProvider client={queryClient}>Hello World!</QueryClientProvider>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
