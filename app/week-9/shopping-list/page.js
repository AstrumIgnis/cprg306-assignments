import PageClient from './page-client';

// Main page component that uses the client-side PageClient component
// If metadata is set in on a client side file, it will cause an error.

export default function Page() {
    return (
        <main>
            <h1 className="text-3xl font-bold m-4">Shopping List</h1>
            <PageClient />
        </main>
    );
}

export const metadata = {
    title: "Shopping List",
};