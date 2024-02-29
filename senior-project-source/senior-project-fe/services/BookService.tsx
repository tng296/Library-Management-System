import axios from './customizedAxios';
import fakeDBBook from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-be/fakeDB/fakeBookDB.ts';

const fetchAllBook = (page: number) => {
    return fakeDBBook;
}
const postBook = (isbn: string, genre: string, title: string, location: string, status: string, publishedBy: string, writtenBy: string, language: string, shelf: string) => {
    
export { fetchAllBook }