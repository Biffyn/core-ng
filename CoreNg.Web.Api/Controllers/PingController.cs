using Microsoft.AspNetCore.Mvc;
using Serilog;
using System;

namespace CoreNg.Web.Api.Controllers
{
    [Route("/api/ping")]
    [Route("/")]
    [ApiController]
    public class PingController : ControllerBase
    {
        private readonly ILogger _logger;

        public PingController(ILogger logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult<string> Ping()
        {
            _logger.ForContext<PingController>().Information("Ping()");
            try
            {
                return "Pong";
            }
            catch (Exception ex)
            {
                _logger.ForContext<PingController>().Error($"Something went wrong: {ex}");
                return StatusCode(500, "Internal server error");
            }
            
        }
    }
}
