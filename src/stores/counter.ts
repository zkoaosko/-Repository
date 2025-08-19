import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const isshow = ref(true)

  const tableData = ref<User[]>([
    {
      id: "001",
      project: "Road Project A",
      overtime: true,
      hours: 3.5,
      created_at: "2024-04-10 10:30"
    },
    {
      id: "002",
      project: "Bridge Maintenance B",
      overtime: false,
      hours: 2,
      created_at: "2024-04-09 13:00"
    },
    {
      id: "003",
      project: "Pipeline Fix C",
      overtime: true,
      hours: 4.5,
      created_at: "2024-04-08 08:00"
    },
    {
      id: "004",
      project: "Bridge Maintenance B",
      overtime: true,
      hours: 3,
      created_at: "2024-04-07 16:45"
    },
    {
      id: "005",
      project: "Tunnel Cleaning D",
      overtime: false,
      hours: 8.1,
      created_at: "2024-04-03 11:43"
    },
  ]);

  interface User {
    id: string;
    project: string;
    overtime: boolean;
    hours: number;
    created_at: string;
  }

  const handleDelete = async (index: number, row: User) => {
    tableData.value = tableData.value.filter((item) => item.id !== row.id);
  };

  const changeShow = (newShow: boolean) =>{
    isshow.value = newShow
  }

  return { isshow, tableData, handleDelete, changeShow}
})
