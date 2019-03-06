using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SweepingManagement.Startup))]
namespace SweepingManagement
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
