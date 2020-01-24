const columns = [
  {
    label: "Row 1",
    field: "row_1",
    // tdClass: 'is-capitalized',
    filterOptions: {
      enabled: true,
      placeholder: "-- All --",
      filterValue: "" // initial value
    }
  },
  {
    label: "Row 2",
    field: "row_2",
    filterOptions: {
      enabled: true,
      placeholder: "-- All --",
      filterValue: "" // initial value
    }
  },
  {
    label: "Row 3",
    field: "row_3",
    filterOptions: {
      enabled: true,
      placeholder: "-- All --",
      filterValue: "" // initial value
    }
  },
  {
    label: "Row 4",
    field: "row_4",
    filterOptions: {
      enabled: true,
      placeholder: "-- All --",
      filterValue: "" // initial value
    }
  },
  {
    label: "Row 5",
    field: "row_5",
    filterOptions: {
      enabled: true,
      placeholder: "-- All --",
      filterValue: "" // initial value
    }
  },
  {
    label: "Row 6",
    field: "row_6",
    filterOptions: {
      enabled: true,
      placeholder: "-- All --",
      filterValue: "" // initial value
    }
  },
  {
    label: "Row 7",
    field: "row_7",
    filterOptions: {
      enabled: true,
      placeholder: "-- All --",
      filterValue: "" // initial value
    }
  },
  {
    label: "Row 8",
    field: "row_8",
    filterOptions: {
      enabled: true,
      placeholder: "-- All --",
      filterValue: "" // initial value
    }
  },
  {
    label: "Row 9",
    field: "row_9",
    filterOptions: {
      enabled: true,
      placeholder: "-- All --",
      filterValue: "" // initial value
    }
  },
  {
    label: "Row 10",
    field: "row_10",
    filterOptions: {
      enabled: true,
      placeholder: "-- All --",
      filterValue: "", // initial value
      // filterDropdownItems: [
      //   { text: "Internal", value: "internal" },
      //   { text: "Guest", value: "guest" }
      // ]
    }
  },
];

const sortOptions = {
  enabled: true,
  initialSortBy: [{ field: "row_1", type: "asc" }]
};

const searchOptions = {
  enabled: true,
  placeholder: "Search..."
};

const pageOptions = {
  enabled: true,
  mode: "records",
  perPage: 20,
  // position: "top",
  // perPageDropdown: [3, 7, 9],
  dropdownAllowAll: false,
  setCurrentPage: 1,
  nextLabel: "next",
  prevLabel: "prev",
  rowsPerPageLabel: "Rows per page",
  ofLabel: "of",
  pageLabel: "page", // for 'pages' mode
  allLabel: "All"
};

export default {
  columns,
  sortOptions,
  searchOptions,
  pageOptions
};