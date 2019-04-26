const block = {
  id: 'block',
  label: 'HTMLBlock',
  fields: [
    {
      label: 'Title Icon',
      name: 'icon',
      widget: 'image',
      media_library: {
        allow_multiple: false,
      },
    },
    {
      label: 'Title Text',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Block Content',
      name: 'content',
      widget: 'string'
    },
  ],
  pattern: /^< IframeBlock icon="(\S+)" title="(\S+)" content="(\S+)" >$/,

  fromBlock: (match) => {
    return (
      match && {
        icon: match[1],
        title: match[2],
        content: match[3],
      }
    )
  },

  toBlock: ({ icon, title, content }) => {
    return `< IframeBlock icon="${icon || ''}" title="${title || 'undefined'}" content="${content || ''}" >`;
  },
  
  // eslint-disable-next-line react/display-name
  toPreview: ({ icon, title, content }, getAsset) => (`
      <div className='block-container'>
        <h3 className='block-title'>
          <span className='block-icon'>
            <img src={getAsset(${icon || ''})} alt={${title || ''} } /> 
          </span>
        </h3>
        <div
            class="gatsby-resp-iframe-wrapper"
            style="padding-bottom: 59.20281359906213%; position: relative; height: 0; overflow: hidden;"
          >
            <div style="overflow: hidden; padding-bottom: 56.25%; position: relative; height: 0;">
              <iframe src="${content}" 
                style="left: 0;top: 0;height: 100%;width: 100%;
                  position: absolute;
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;"
                frameborder="0"
                webkitallowfullscreen="" 
                mozallowfullscreen="" 
                allowfullscreen>
              </iframe>
            </div>
          </div>
      </div>
  `),
};

export default block;
