module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        const dateObj = new Date(0)
        dateObj.setMilliseconds(date)
        return dateObj.toLocaleDateString();
      },
}