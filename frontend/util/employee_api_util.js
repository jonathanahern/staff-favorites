export const fetchEmployees = () => {
    return $.ajax({
        url: "api/employees",
        method: "GET"
    });
};