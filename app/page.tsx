import { redirect } from 'next/navigation';
import db from '../backend/config/db';
export default function Home() {
  db;
 return redirect('/Rooms');
}