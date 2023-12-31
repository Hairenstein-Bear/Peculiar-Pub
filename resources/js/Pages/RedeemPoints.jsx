import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-kadwa text-xl text-gray-800 leading-tight">Loyalty Point Redemption</h2>}
        >
            <Head title="Add Loyalty Points" />

            <div className="py-12">
                <div className="font-kadwa max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg text-center">
                        <div className="p-6 text-gray-900 text-4xl">Loyalty Point Redemption</div>
                        <div><a href = "/dashboard">Return to Dashboard</a></div>
                        <div><a href = "/add-loyalty-points-form">Add Loyalty Points</a></div>
                        <div><a href = "/lookup-loyalty-points">Loyalty Point Lookup</a></div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}