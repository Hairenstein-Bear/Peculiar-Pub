import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-kadwa text-3xl text-gray-800 leading-tight">Loyalty Point History</h2>}
        >
            <Head title="Add Loyalty Points" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 font-kadwa">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg text-center">
                        <div className="p-6 text-gray-900 text-4xl">Loyalty Points</div>
                        <div>
                            <table>
                                <th>
                                    <tr>
                                        <td>
                                            
                                        </td>
                                    </tr>
                                </th>
                            </table>
                        </div>
                        <div><a href = "/dashboard">Return to Dashboard</a></div>
                        <div><a href = "/addpoints">Add Loyalty Points</a></div>
                        <div><a href = "/redeempoints">Redeem Points</a></div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}