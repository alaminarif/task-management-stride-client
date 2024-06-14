import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../Firebase/firebase.init';
import getAllNotification from '../../ReduxServices/actoions/AllNotificationsAction';
import { useAuthState } from "react-firebase-hooks/auth";
import DataTable from 'react-data-table-component';
import useNotificationsTable from '../Tables/useNotificationsTable';

const AllNotifications = () => {
    const [admin, adminLoading, AdminError] = useAuthState(auth)
    const member = JSON.parse(localStorage.getItem('member'))
    const email = admin?.email;
    const memberId = member?.id;
    const { isLoading, data, error } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllNotification(email || memberId));
    }, [email, memberId]);

    const [notificationsTableColumns] = useNotificationsTable();
    const notification = [...data].reverse()
    if (isLoading || adminLoading) {
        return <></>;
    }
    if (error) {
        alert(error.message);
    }

    return (
        <div className="mx-5">
            <DataTable columns={notificationsTableColumns} data={notification} pagination></DataTable>
        </div>
    );
};

export default AllNotifications;