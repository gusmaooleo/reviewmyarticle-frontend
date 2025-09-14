
// export default function formatDate(date: Date): string {

// }

export default function parseISO8601Date(date: Date) {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: userTimeZone, 
    };

    const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(date);
    return formattedDate;
  }