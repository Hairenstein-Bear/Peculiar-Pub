import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Loyalty Points</h2>}
        >
            <Head title="Add Loyalty Points" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Add points below</div>
                        <div><a href = "/dashboard">Return to Dashboard</a></div>
                        <div><a href = "/lookuppoints">Loyalty Points History</a></div>
                        <div><a href = "/redeempoints">Redeem Points</a></div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}