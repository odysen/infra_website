import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

//  README! README! README!
//  
//  If you're here, it means you're currently looking to edit a component's colors, or add some.
//  In that case, keep in mind - you NEED to add colorscheme: { dark: { ... } } boilerplate, or some components might not be themed :3
//  The main colors from the Odysen colorpalette usually stay at .600 index, aka. mint.600 (and mint.600, by extension) will be Odysen Mint - #1deda2, same with Odysen Space, and so on.

const odysenUI = definePreset(Aura, {
    primitive: {
        mint: { 50: '#112922', 100: '#134131', 200: '#17553f', 300: '#187654', 400: '#1aa170', 500: '#1ccc8d', 600: '#1deda2', 700: '#41e3a2', 800: '#6bf3b8', 900: '#95f8c9' },
        space: { 50: '#0f0f0f', 100: '#111111', 200: '#101117', 300: '#0f0f19', 400: '#0c0d1b', 500: '#0a0b1d', 600: '#08091e', 700: '#131529', 800: '#202336', 900: '#333544' },
        spacemint: { 100: '#121f2a', 200: '#28343e', 300: '#404a54', 400: '#58616a', 500: '#727981', 600: '#8d9399' },
        flashbang: { 100: '#fff' }
    },
    semantic: {
        primary: {
            50: '{mint.50}',
            100: '{mint.100}',
            200: '{mint.200}',
            300: '{mint.300}',
            400: '{mint.400}',
            500: '{mint.500}',
            600: '{mint.600}',
            700: '{mint.700}',
            800: '{mint.800}',
            900: '{mint.900}'
        },
        surface: {
            50: '{space.50}',
            100: '{space.100}',
            200: '{space.200}',
            300: '{space.300}',
            400: '{space.400}',
            500: '{space.500}',
            600: '{space.600}',
            700: '{space.700}',
            800: '{space.800}',
            900: '{space.900}'
        },
        text: {
            100: '{flashbang.100}',
        },
        formField: {
            hoverBorderColor: '{primary.600}'
        },
        focusRing: {
            color: '{primary.600}',
            style: 'dashed',
            width: '2px'
        }
    },
    components: {
        menubar: {
            colorScheme: {
                dark: {
                    root: {
                        background: '{primary.50}',
                        color: '{flashbang.100}',
                    },
                    border: {
                        color: '{primary.100}'
                    },
                    item: {
                        color: '{flashbang.100}',
                        focus: {
                            background: '{primary.100}',
                            color: '{flashbang.100}'
                        },
                        active: {
                            background: '{primary.100}',
                            color: '{flashbang.100}'
                        }
                    },
                    submenu: {
                        background: '{primary.50}',
                        color: '{flashbang.100}',
                        border: {
                            color: '{primary.100}'
                        }
                    },
                    mobile: {
                        button: {
                            color: '{flashbang.100}',
                            hover: {
                                background: '{primary.200}',
                                color: '{flashbang.100}'
                            },
                            active: {
                                background: '{primary.200}',
                                color: '{flashbang.100}'
                            }
                        }
                    }
                }
            } 
        },
        button: {
            colorScheme: {
                dark: {
                    primary: {
                        background: '{primary.600}',
                        color: '{space.600}',
                        hover: {
                            background: '{primary.800}',
                            color: '{space.600}'
                        },
                        active: {
                            background: '{primary.400}',
                            color: '{space.600}'
                        }
                    },
                    secondary: {
                        background: '{primary.100}',
                        color: '{primary.600}',
                        border: {
                            color: '{primary.300}'
                        },
                        hover: {
                            background: '{primary.200}',
                            color: '{primary.600}',
                            border: {
                                color: '{primary.300}'
                            }
                        },
                        active: {
                            background: '{primary.300}',
                            color: '{primary.600}',
                            border: {
                                color: '{primary.300}'
                            }
                        }
                    }
                }
            }
        },
        inputtext: {
            colorScheme: {
                dark: {
                    root: {
                        background: '{primary.100}',
                        color: '{flashbang.100}',
                        border: {
                            color: '{primary.300}'
                        },
                        focus: {
                            background: '{primary.100}',
                            color: '{flashbang.100}',
                            border: {
                                color: '{primary.600}'
                            }
                        },
                        hover: {
                            border: {
                                color: '{primary.600}'
                            }
                        },
                        placeholder: {
                            color: '{flashbang.100}'
                        }
                    }
                }
            }
        }
    }
});

export default odysenUI;