import { Home } from '@/pages/home/home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FunctionComponent, Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const queryClient = new QueryClient();

const App: FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<div></div>}>
				<QueryClientProvider client={queryClient}>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</QueryClientProvider>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
