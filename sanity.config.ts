import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import StudioNavbar from './components/StudioNavbar';
import Logo from './components/Logo';
import { getDefaultDoumentNode } from './structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/admin",
  name: 'ContentStudio',
  title: 'ContentStudio',
  theme: myTheme,
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar
    }
  },

  projectId,
  dataset,

  plugins: [deskTool({
    defaultDocumentNode: getDefaultDoumentNode,
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
