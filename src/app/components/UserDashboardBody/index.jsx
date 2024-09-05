import React from "react";
import style from './style.module.css';
import { SideMenu } from "../Sidemunu";
import { DashboardBody } from "../dashboard";
import { TransactionTable } from "../dashboard/table";

export const UserDashboard = () => {
    return (
        <div className={style.container}>
            <aside>
                <SideMenu />
            </aside>

            <article className={style.body}>
                <DashboardBody />
                <TransactionTable />
            </article>
        </div>
    )
}