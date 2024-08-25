# ui-aceternity-vue

This a non-official port of [Aceternity UI](https://ui.aceternity.com/) to Vue.

## State

This is clearly under development and no library has been published.

## Components list

- [3D Card Effect](https://ui.aceternity.com/components/3d-card-effect): [Working](/3d-card-effect)
- [Macbook Scroll](https://ui.aceternity.com/components/macbook-scroll): [In Construction](/macbook-scroll)
- [Aurora Background](https://ui.aceternity.com/components/aurora-background): [Working](/aurora-background)
- [Spotlight](https://ui.aceternity.com/components/spotlight): [Working](/spotlight)
- [Grid & Dot Background](https://ui.aceternity.com/components/aurora-background): [Working](/backgrounds)

  This requires `mini-svg-data-uri` deps, the 2 following functions in the `tailwind.config.ts` file (please have a look at it):

  ```typescript
  function ({ matchUtilities, theme }: any) {
    matchUtilities(
      {
        'bg-grid': (value: any) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`
        }),
        'bg-grid-small': (value: any) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`
        }),
        'bg-dot': (value: any) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
          )}")`
        })
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    );
  }
  function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars
	});
  ```


## Contributing

Please read the [contributing guide](/CONTRIBUTING.md).
