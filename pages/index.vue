<template>
  <h1>This is a work in progress</h1>

  <ul>
    <li>
      <a href="https://ui.aceternity.com/components/3d-card-effect"
        >3D Card Effect</a
      >
      : <a href="/3d-card-effect">Working</a>
    </li>
    <li>
      <a href="https://ui.aceternity.com/components/macbook-scroll"
        >Macbook Scroll</a
      >
      : <a href="/macbook-scroll">In Construction</a>
    </li>
    <li>
      <a href="https://ui.aceternity.com/components/aurora-background"
        >Aurora Background</a
      >
      : <a href="/aurora-background">Working</a>
    </li>
    <li>
      <a href="https://ui.aceternity.com/components/aurora-background"
        >Grid & Dot Background</a
      >
      : <a href="/backgrounds">Working</a>
      <p>This requires mini-svg-data-uri & addVariablesForColors &  and the following function 
        <blockquote>
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
        </blockquote>
        in the tailwind.config.ts file
      </p>
    </li>
    <li>
      <a href="https://ui.aceternity.com/components/spotlight"
        >Spotlight</a
      >
      : <a href="/spotlight">Working</a>
    </li>
  </ul>
</template>
