import React, {
    useCallback,
    useMemo,
    useState,
} from "react";
import { createRoot } from "react-dom/client";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Navbar } from "../../Components/Navbar";
import { StickyFooterMobile } from "../../Components/StickyFooterMobile";

var filterParams = {
    comparator: (filterLocalDateAtMidnight, cellValue) => {
        var dateAsString = cellValue;
        if (dateAsString == null) return -1;
        var dateParts = dateAsString.split("/");
        var cellDate = new Date(
            Number(dateParts[2]),
            Number(dateParts[1]) - 1,
            Number(dateParts[0]),
        );
        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
            return 0;
        }
        if (cellDate < filterLocalDateAtMidnight) {
            return -1;
        }
        if (cellDate > filterLocalDateAtMidnight) {
            return 1;
        }
        return 0;
    },
    minValidYear: 2000,
    maxValidYear: 2021,
    inRangeFloatingFilterDateFormat: "Do MMM YYYY",
};

const GridExample = () => {

    const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
    const gridStyle = useMemo(() => ({ height: "100vh", width: "100vh" }), []);
    const [rowData, setRowData] = useState();

    const [columnDefs, setColumnDefs] = useState([
        { field: "athlete" },
        {
            field: "date",
            filter: "agDateColumnFilter",
            filterParams: filterParams,
        },
        { field: "total", filter: true },
        {
            field: "profile",
            headerName: "Profile",
            cellRenderer: (params) => {
                const athleteName = params.data.athlete.replace(/\s+/g, '-').toLowerCase();
                const url = `/athlete-profile/${athleteName}`;
                return (
                    <button className="btn btn-primary"
                        onClick={() => window.location.href = url}
                    >
                        View Profile
                    </button>
                );
            },
        }
    ]);

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            minWidth: 150,
            filter: true,
            // floatingFilter: true,
        };
    }, []);

    const onGridReady = useCallback((params) => {
        fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
            .then((resp) => resp.json())
            .then((data) => setRowData(data));
    }, []);

    // const pagination = true;

    // const paginationPageSize = 5;

    // const paginationPageSizeSelector = [5, 20, 50, 100];

    return (
        <>
            <Navbar />
            <div
                style={gridStyle}
                className="ag-theme-quartz "
            >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    onGridReady={onGridReady}
                    // pagination={pagination}
                    // paginationPageSize={paginationPageSize}
                    // paginationPageSizeSelector={paginationPageSizeSelector}
                />
            </div>

            <StickyFooterMobile />
        </>
    );
};

export default GridExample
