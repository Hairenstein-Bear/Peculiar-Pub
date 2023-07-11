import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-kadwa text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12 font-kadwa">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg text-center">
                        <div className="p-6 text-gray-900 text-3xl">Welcome to the Peculiar Pub Loyalty Portal</div>
                        <div><a href = "/add-loyalty-points-form">Add Points</a></div>
                        <div><a href = "/lookup-loyalty-points">Lookup Point History</a></div>
                        <div><a href = "/redeempoints">Redeem Points</a></div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
