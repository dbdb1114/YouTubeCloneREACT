
import Header from "./Header";
import { Outlet } from "react-router-dom";
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default () => {

    return(
        <div>
            <Header/>
            <QueryClientProvider client={queryClient}>
                <Outlet/>
            </QueryClientProvider>
        </div>
    )

}