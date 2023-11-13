using API.Data;
using API.DTOs;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CampgroundController : Controller
    {
        private readonly DataContext _context;

        public CampgroundController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Campground>>> GetCampgrounds()
        {
            var result = await _context.Campgrounds.ToListAsync();
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Campground>> GetCampgroundById(int id)
        {
            var result = await _context.Campgrounds.FindAsync(id);
            return Ok(result);
        }

        [HttpPost("new")]
        public async Task<ActionResult<CampgroundDto>> CreateCampground(CampgroundDto campgroundDto)
        {
            try
            {
                if (await CheckCampgroundExist(campgroundDto.Title))
                {
                    return BadRequest("Campground already exist.");
                }

                var campground = new Campground
                {
                    Title = campgroundDto.Title,
                    Price = campgroundDto.Price,
                    Location = campgroundDto.Location,
                    Description = campgroundDto.Description,
                };

                await _context.Campgrounds.AddAsync(campground);
                await _context.SaveChangesAsync();

                return Ok(campground);
            }
            catch (Exception ex)
            {
                throw new Exception($"Error creating campground: {ex.Message}");
            }
           
        }

        //[HttpGet("{id}/edit")]
        //public async Task<ActionResult<CampgroundDto>> EditCampground(int id, CampgroundDto campgroundDto)
        //{
        //    var result = await _context.Campgrounds.FindAsync(id);

        //    if(result == null)
        //    {
        //        return NotFound();
        //    }




        //}

        private async Task<bool> CheckCampgroundExist(string campName)
        {
            return await _context.Campgrounds.AnyAsync(x => x.Title == campName.ToLower());
        }
    }
}
