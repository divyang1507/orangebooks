// import { collection, addDoc } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { db, storage } from '../../../firebase.config';




// const createSlug = (name) => {
//     return name
//       .toLowerCase()
//       .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
//       .replace(/\s+/g, '-') // Replace spaces with hyphens
//       .trim();
//   };



//   export default async function handler(req, res) {
//     if (req.method === 'POST') {
//       const form = new formidable.IncomingForm();
  
//       form.parse(req, async (err, fields, files) => {
//         if (err) {
//           return res.status(500).json({ error: 'Error parsing form data' });
//         }
  
//         const { name, description ,price, rating, stars, stock  } = fields;
//         const imageFile = files.image;
  
//         if (!imageFile) {
//           return res.status(400).json({ error: 'No image file provided' });
//         }
  
//         try {
//           // Generate the slug from the name
//           const slug = createSlug(name);
  
//           // Upload the image to Firebase Storage
//           const storageRef = ref(storage, `images/${imageFile.name}`);
//           const imageBuffer = await imageFile.toBuffer();
//           await uploadBytes(storageRef, imageBuffer);
  
//           // Get the URL of the uploaded image
//           const imageUrl = await getDownloadURL(storageRef);
  
//           // Add data to Firestore including the image URL and slug
//           await addDoc(collection(db, 'books'), {
//             name,
//             description,
//             slug,
//             imageUrl,
//             price, 
//             rating, 
//             stars, 
//             stock,
//             createdAt: new Date(),
//           });
  
//           res.status(200).json({ message: 'Data uploaded successfully' });
//         } catch (error) {
//           res.status(500).json({ error: 'Failed to upload image and data' });
//         }
//       });
//     } else {
//       res.status(405).json({ message: 'Method not allowed' });
//     }
//   }