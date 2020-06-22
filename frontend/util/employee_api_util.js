export const fetchEmployees = () => {
    return $.ajax({
        url: "api/employees",
        method: "GET"
    });
};

export const updateEmployee = employee => (
    $.ajax({
        url: `/api/employees/${employee.id}`,
        method: 'patch',
        data: { employee }
    })
);