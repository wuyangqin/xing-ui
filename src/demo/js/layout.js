const LAYOUT_OPTION = [
  {
    name: 'primary',
    title: '常见页面布局',
    code:`
<x-container>
  <x-header > header </x-header>
  <x-main> main </x-main>
</x-container>
    `
  },
  {
    name: '1',
    code:`
<x-container>
  <x-header > header </x-header>
  <x-main> main </x-main>
  <x-footer> footer </x-footer>
</x-container>
    `
  },
  {
    name: '2',
    code:`
<x-container>
  <x-aside > aside </x-aside>
  <x-main> main </x-main>
</x-container>
    `
  },
  {
    name: '3',
    code:`
<x-container>
  <x-header>header</x-header>
  <x-container>
    <x-aside>aside</x-aside>
    <x-main>main</x-main>
  </x-container>
</x-container>
    `
  },
  {
    name: '4',
    code:`
<x-container>
  <x-header>header</x-header>
  <x-container>
    <x-aside>aside</x-aside>
    <x-main>main</x-main>
  </x-container>
  <x-footer>footer</x-footer>
</x-container>
    `
  },
  {
    name: '5',
    code:`
<x-container>
  <x-aside>aside</x-aside>
  <x-container>
    <x-header>header</x-header>
    <x-main>main</x-main>
  </x-container>
</x-container>
    `
  },
  {
    name: '6',
    code:`
<x-container>
  <x-aside>aside</x-aside>
  <x-container>
    <x-header>header</x-header>
    <x-main>main</x-main>
    <x-footer> footer </x-footer>
   </x-container>
</x-container>
    `
  }
]

export { LAYOUT_OPTION }
